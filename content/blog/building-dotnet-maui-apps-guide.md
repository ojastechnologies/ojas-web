---
title: "Building Cross-Platform Mobile Apps with .NET MAUI: A Practical Guide"
description: "A practical guide to building cross-platform mobile apps with .NET MAUI — covering architecture, platform-specific code, performance tips, and real-world lessons from production apps."
date: "2026-06-12"
author: "Ojas Technologies"
tags: [".NET MAUI", "Mobile Development", "Cross-Platform", "C#"]
readingTime: "10 min read"
---

## Why Teams Choose .NET MAUI for Cross-Platform Mobile Development

If you're building mobile apps for Android and iOS — and possibly Windows and macOS too — you've got plenty of framework options. But if your team lives in the Microsoft ecosystem, **.NET MAUI** (Multi-platform App UI) deserves serious consideration.

MAUI is the successor to Xamarin.Forms, and it represents Microsoft's modern approach to cross-platform development. You write your UI and business logic once in C# and XAML, targeting Android, iOS, Windows, and macOS from a single project. The result is a native app experience with a shared codebase.

At Ojas Technologies, we've used MAUI to ship production healthcare applications serving thousands of patients. Here's what we've learned about building real-world MAUI apps — the architecture decisions, the platform-specific gotchas, the performance optimizations, and when MAUI makes sense versus alternatives like React Native or Flutter.

## What Makes .NET MAUI Different?

Unlike frameworks that render through a JavaScript bridge (React Native) or a custom graphics engine (Flutter), MAUI maps your XAML-defined UI directly to native platform controls. A `<Button>` in MAUI becomes a native Android `Button` or iOS `UIButton`. This gives you:

- **Native look and feel** — Your app uses the platform's native UI components, so it always feels right on each OS
- **Direct access to platform APIs** — Call Android SDK or iOS UIKit APIs directly from C#
- **Shared business logic across platforms** — .NET Standard libraries, NuGet packages, and your own service code all work everywhere
- **Desktop + Mobile from one project** — Target Windows and macOS with the same codebase, which neither React Native nor Flutter does natively

## Architecture Patterns That Work

### MVVM Done Right

MAUI was built for the **Model-View-ViewModel (MVVM)** pattern. Every MAUI page has a corresponding ViewModel that holds all the UI state and logic. Here's the approach we've refined across several production apps:

```csharp
// ViewModel base class with property change notification
public class BaseViewModel : INotifyPropertyChanged
{
    private bool _isBusy;
    public bool IsBusy
    {
        get => _isBusy;
        set { _isBusy = value; OnPropertyChanged(); }
    }

    public event PropertyChangedEventHandler? PropertyChanged;
    protected void OnPropertyChanged([CallerMemberName] string name = null)
        => PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
}

// A concrete ViewModel
public class PatientSearchViewModel : BaseViewModel
{
    private readonly IPatientService _patientService;
    public ObservableCollection<Patient> SearchResults { get; } = new();

    public PatientSearchViewModel(IPatientService patientService)
    {
        _patientService = patientService;
    }

    public async Task SearchAsync(string query)
    {
        IsBusy = true;
        try
        {
            var results = await _patientService.SearchAsync(query);
            SearchResults.Clear();
            foreach (var patient in results)
                SearchResults.Add(patient);
        }
        finally
        {
            IsBusy = false;
        }
    }
}
```

### Dependency Injection from Day One

MAUI has a built-in dependency injection container. Register your services, ViewModels, and pages in `MauiProgram.cs`:

```csharp
public static MauiApp CreateMauiApp()
{
    var builder = MauiApp.CreateBuilder();
    builder
        .UseMauiApp<App>()
        .ConfigureFonts(fonts =>
        {
            fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
        });

    // Register services
    builder.Services.AddSingleton<IPatientService, PatientService>();
    builder.Services.AddSingleton<IAuthService, AuthService>();

    // Register ViewModels
    builder.Services.AddTransient<PatientSearchViewModel>();
    builder.Services.AddTransient<LoginViewModel>();

    // Register Pages
    builder.Services.AddTransient<PatientSearchPage>();
    builder.Services.AddTransient<LoginPage>();

    return builder.Build();
}
```

This keeps your code testable and maintainable — a critical factor for enterprise and healthcare apps where reliability matters.

## Handling Platform-Specific Code

One of MAUI's strongest features is its clean handling of platform-specific logic. You have three main approaches:

### 1. Platform Folders

Each platform gets its own folder under your project: `Platforms/Android/`, `Platforms/iOS/`, `Platforms/Windows/`, `Platforms/MacCatalyst/`. Put platform-specific implementations there — native API calls, platform-specific UI tweaks, hardware access.

### 2. Conditional Compilation

For simple differences, use `#if ANDROID` / `#if IOS` directives:

```csharp
public async Task<string> GetDeviceIdentifierAsync()
{
#if ANDROID
    // Use Android's Settings.Secure
    var context = Android.App.Application.Context;
    return Android.Provider.Settings.Secure.GetString(
        context.ContentResolver,
        Android.Provider.Settings.Secure.AndroidId);
#elif IOS
    // Use iOS UIDevice
    return UIKit.UIDevice.CurrentDevice.IdentifierForVendor.ToString();
#else
    return await Task.FromResult("unknown");
#endif
}
```

### 3. Dependency Injection with Interfaces

For cleaner architecture, define an interface and provide platform-specific implementations:

```csharp
public interface IBiometricAuthService
{
    Task<bool> AuthenticateAsync(string reason);
}

// Android implementation
#if ANDROID
public class BiometricAuthService : IBiometricAuthService
{
    public async Task<bool> AuthenticateAsync(string reason)
    {
        // Use AndroidX Biometric library
    }
}
#endif

// iOS implementation
#if IOS
public class BiometricAuthService : IBiometricAuthService
{
    public async Task<bool> AuthenticateAsync(string reason)
    {
        // Use LocalAuthentication framework
    }
}
#endif
```

## Real Example: SearchMed Patient Portal

Our most significant MAUI project is the **SearchMed patient portal** — a healthcare app we built for a large regional hospital network. The app lets patients:

- View medical records and lab results
- Schedule and manage appointments
- Communicate securely with providers
- Process payments and insurance information
- Access telehealth consultations

**Why MAUI was the right choice:**

- **HIPAA compliance** — MAUI's compiled native code provides a security profile similar to fully native apps, making compliance audits straightforward
- **Shared code with the .NET backend** — The same C# data models, validation logic, and service abstractions power both the backend API and the mobile app
- **Desktop companion** — Hospital staff use a Windows version of the same app built from the same MAUI project
- **Offline support** — SQLite databases synced via Azure App Service handled offline scenarios gracefully

The result was a consistent, performant experience across 3,000+ Android tablets (used by nursing staff) and 15,000+ iOS devices (used by patients), all from a single shared codebase.

→ [See the SearchMed case study in our portfolio](/portfolio)

## Performance Considerations

MAUI apps can perform exceptionally well, but you need to be intentional about it. Here are the lessons from our production experience:

### Startup Time

- **Use compiled bindings** — XAML `x:DataType` removes runtime reflection, dramatically speeding up page rendering
- **Lazy-load pages** — Don't pre-initialize every page in your app shell; load on demand
- **Pre-compile XAML** — Enable XAML compilation in your `.csproj`:

```xml
<MauiXamlCompile>True</MauiXamlCompile>
```

### List Performance

- **Use `CollectionView` over `ListView`** — CollectionView is virtualized and much more performant
- **Set `ItemSizingStrategy` to `MeasureFirstItem`** — Avoids measuring every item during layout
- **Recycle views** — Ensure your `DataTemplate` uses the same view types for similar data

### Image Handling

- **Resize on the server** — Don't download full-resolution images; pre-size them for mobile screens
- **Use FFImageLoading or the built-in cached image** — Prevents re-downloading and UI thread blocking
- **Compress aggressively** — PNG compression tools and WebP format can cut image sizes by 60-80%

## .NET MAUI vs React Native vs Flutter: When to Choose What

| Factor | .NET MAUI | React Native | Flutter |
|--------|-----------|-------------|---------|
| **Language** | C# / XAML | TypeScript / JavaScript | Dart |
| **UI Rendering** | Native controls | Native bridge | Custom engine (Skia) |
| **Performance** | Excellent (compiled) | Good (Hermes) | Excellent |
| **Desktop support** | Built-in | Via community | Via community |
| **.NET integration** | Native | None | None |
| **Developer pool** | .NET developers | JS/React developers | Dart developers |
| **Best for** | Enterprise, .NET shops, data-heavy apps | Consumer apps, startups | Highly custom UIs, design-driven apps |

## When MAUI Might Not Be the Best Fit

Let's be honest — MAUI isn't always the right answer:

- **Highly custom animations** — Flutter's custom rendering engine is more flexible
- **Large existing JavaScript ecosystem** — If you're a React shop, React Native will be faster to adopt
- **Bleeding-edge platform features** — React Native and Flutter communities often get new platform APIs faster than MAUI
- **Small team with no .NET experience** — Learning C#, XAML, *and* mobile development simultaneously is a heavy lift

## Getting Started with .NET MAUI

If you're ready to try MAUI, here's your starting point:

1. **Install .NET 8/9 SDK** with the MAUI workload: `dotnet workload install maui`
2. **Create a new project**: `dotnet new maui -n YourApp`
3. **Set up MVVM** with a base ViewModel class and dependency injection
4. **Choose a shell navigation pattern** — Shell navigation is the modern recommendation
5. **Start with a single platform** — Develop on Android or iOS first, then add the second platform

## Build Your Cross-Platform App with Ojas

**Our team has shipped production MAUI apps serving thousands of users in healthcare, legal, and enterprise contexts.** We know the framework inside out — the sharp edges, the performance tricks, and the architecture patterns that scale.

→ [Contact us to discuss your mobile project](/contact)
→ [See our mobile development portfolio](/portfolio)
→ [Hire experienced .NET MAUI developers](/hire-developers)
→ [Learn more about Ojas Technologies](/about)

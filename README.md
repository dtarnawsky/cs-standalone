# Angular Standalone Components

This is the Ionic tabs starter project converted to use standalone components.

## Bug

In `main.ts` there is a line `import '@angular/compiler';` that should not be required but is in order to avoid the error: `The component 'AppComponent' needs to be compiled using the JIT compiler, but '@angular/compiler' is not available.`. Until this issue is resolved I would avoid using this project as a canonical example.
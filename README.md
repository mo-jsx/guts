# Guts ⚔️

A react components library.

⚠️ under construction

## Tools 
- **Storybook** : UI playground tool allows to build and document components in isolation.
- **Rollup** : JS bundler, for packing and distributing the library into a single module.
- **Jest** : Test runner for JS.
---
## Implemented Components 
- Buttons
    
    - Simple Button
    - Flat Button

- Inputs 

    - Simple Input
    - Textarea
    - Select 
    - Checkbox
    - Radio button

- Navigation

    - Simple Link
    - Dropdown 
    - Header 
    - Footer 
    - Mobile Menu
    - Breadcumber 

--- 
## Design System 

### Color palette 
Guts mainly uses the following colors : 

- ![#DC143C](https://placehold.co/15x15/dc143c/dc143c.png) `Crimson #DC143C`
- ![#00008B](https://placehold.co/15x15/00008B/00008B.png) `Navy Blue #00008B`
- ![#111111](https://placehold.co/15x15/111111/111111.png) `Night #111111`
- ![#cccccc](https://placehold.co/15x15/cccccc/cccccc.png) `Silver #cccccc`
- ![#ffffff](https://placehold.co/15x15/ffffff/ffffff.png) `White #ffffff`

### Typography
We choose to use one typography from Google's Fonts library and make use of **Martian Mono**’s different declination. This helps us move quickly and maintain visual consistency.

[Link To Typography](https://fonts.google.com/specimen/Martian+Mono)

### Iconography 
We source the majority of our UI icons from Heroicons. This helps us to avoid inconsistency.

[Link To Iconography](https://heroicons.dev/)

You can find the complete design system and guidelines from where Guts was inspired to use it best. [Design System](https://snow-coffee-285.notion.site/dd4e110cfd5d4c44a840ff43e289c3c5?v=9d2f7a1c74f04f81966ab0fa3dee4923)

---
## Guidelines 

### Installation
```
npm install @mojsx/guts
```

### Use case
#### **Button**
```
...
import { FlatButton } from "guts/buttons";

...

const App = () => {
    return(
        <>
            <FlatButton 
                content="White Button" 
                href="https://github.com/mo-jsx/guts" 
                variant="primary" 
            />
        </>
    )
}

export default App;
```
#### **Result** 
![White FlatButton](https://media.giphy.com/media/Fg5qQ8QrR2NiL9vqTR/giphy.gif)

# Bushido IT favicon pack

Archivos recomendados para colocar en la carpeta `public/` de un proyecto React/Vite:

- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `site.webmanifest`

Snippet para `index.html`:

```html
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#002A63" />
```

Para favicon conviene usar solo el símbolo/isotipo, no el logo completo con texto, porque en 16x16 y 32x32 el texto se pierde.

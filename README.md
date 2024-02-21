# steps to reproduce
- run `npm i`
- run `ng build`
- run `npm run serve:ssr:y`
- run in new tab `npm run serve:dist`
- navigate to `http://127.0.0.1:4000`
- check links behavior, the cms link is wrong as baseHref points to the "CDN".

# VUE Wallet Control

An wallet control built with Vue 3 and the composition API.
- Add and remove expenses/income
- Wallet balance
- Save data to local storage
- [Vue Toastification](https://github.com/Maronato/vue-toastification) for notifications

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Docker Nginx test for Production

```sh
docker run -p 80:80 --name walletcontrol -v $(pwd)/dist:/usr/share/nginx/html -d nginx
```

#### License MIT
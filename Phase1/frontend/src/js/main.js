let generateNavbar = () => {
  let navbar = document.getElementById('navbar')
  return (navbar.innerHTML = [1]
    .map(() => {
      return`
        <div class="navbar menu">
          <a href="index.html?" title="Home">
            <svg xmlns="http://www.w3.org/2000/svg" width="137px" height="62px" viewBox="0 0 137 62" version="1.1">
              <path stroke="#1616167c" stroke-width="0.1" stroke-linecap="round" stroke-linejoin="round" 
                d="M 89.203125 34.191406 C 87.367188 34.472656 85.5 34.539062 83.527344 34.703125 C 84.1875 34.304688 85.339844 33.535156 85.328125 33.5 C 84.914062 33.5 84.046875 33.390625 84.03125 33.332031 C 85.183594 32.773438 86.332031 32.210938 87.484375 31.648438 C 87.511719 31.691406 87.351562 32.113281 87.179688 32.390625 C 88.25 32.304688 90.25 32.242188 90.261719 32.289062 C 89.394531 32.539062 87.6875 33.246094 87.703125 33.347656 C 89.054688 33.257812 90.40625 33.164062 91.757812 33.074219 C 91.78125 33.105469 90.109375 34.054688 89.203125 34.191406 Z M 86.835938 35.640625 C 87.011719 35.667969 87.191406 35.730469 87.363281 35.714844 C 88.910156 35.59375 90.417969 35.679688 91.914062 36.199219 C 92.539062 36.414062 93.269531 36.328125 93.875 35.863281 C 93.0625 35.597656 92.261719 35.449219 91.578125 35.082031 C 89.859375 34.160156 88.375 34.988281 86.835938 35.640625 Z M 122.839844 47.585938 C 122.15625 47.292969 121.511719 47.015625 120.742188 46.683594 C 120.859375 47.050781 120.910156 47.214844 120.964844 47.386719 C 120.261719 47.054688 119.601562 46.742188 118.9375 46.429688 C 118.882812 46.511719 119.476562 47.28125 119.445312 47.328125 C 118.980469 47.164062 118.523438 46.976562 118.054688 46.835938 C 117.59375 46.703125 117.125 46.605469 116.652344 46.523438 C 116.1875 46.4375 115.714844 46.390625 115.394531 46.34375 C 117.21875 47.738281 119.113281 49.183594 121.101562 50.703125 C 120.722656 49.933594 120.367188 49.203125 119.953125 48.363281 C 120.757812 48.773438 121.515625 49.164062 122.273438 49.550781 C 122.296875 49.523438 121.902344 48.71875 121.746094 48.457031 C 122.6875 48.578125 124.878906 48.808594 125.164062 48.789062 C 124.34375 48.21875 123.664062 47.746094 122.960938 47.257812 C 122.90625 47.410156 122.871094 47.507812 122.839844 47.585938 Z M 109.691406 48.574219 C 110.457031 49.828125 111.242188 51.117188 111.992188 52.339844 C 112.40625 50.03125 110.816406 48.363281 109.691406 48.574219 Z M 126.101562 48.347656 C 127.128906 49.316406 128.191406 50.324219 129.203125 51.28125 C 129.019531 49.75 127.613281 48.410156 126.101562 48.347656 Z M 113.679688 46.941406 C 114.335938 47.703125 115.15625 48.660156 115.988281 49.625 C 115.917969 48.09375 114.683594 46.902344 113.679688 46.941406 Z M 77.066406 56.707031 C 76.914062 56.769531 76.800781 56.941406 76.667969 57.058594 C 76.808594 57.191406 76.945312 57.429688 77.089844 57.4375 C 77.605469 57.46875 78.125 57.421875 78.753906 57.398438 C 78.207031 56.703125 77.617188 56.484375 77.066406 56.707031 Z M 71.28125 56.355469 C 71.425781 57.074219 72.097656 57.4375 73.003906 57.335938 C 72.699219 56.589844 72.078125 56.226562 71.28125 56.355469 Z M 73.941406 56.367188 C 74.160156 57.058594 74.675781 57.371094 75.449219 57.277344 C 75.21875 56.445312 74.5625 56.054688 73.941406 56.367188 Z M 53.144531 56.15625 C 52.484375 56.34375 51.984375 56.765625 51.710938 57.523438 C 52.300781 57.308594 52.90625 57.125 53.476562 56.863281 C 53.625 56.796875 53.660156 56.492188 53.746094 56.296875 C 53.546875 56.242188 53.316406 56.105469 53.144531 56.15625 Z M 55.160156 56.589844 C 55.171875 56.753906 55.402344 56.902344 55.539062 57.054688 C 55.703125 56.859375 55.921875 56.6875 56 56.460938 C 56.035156 56.367188 55.777344 56.164062 55.519531 55.847656 C 55.332031 56.210938 55.144531 56.410156 55.160156 56.589844 Z M 136.539062 60.054688 L 136.539062 61.3125 L 0.460938 61.3125 L 0.460938 60.054688 L 5.34375 60.054688 C 2.546875 58.191406 3.179688 52.855469 5.265625 50.34375 C 8.613281 43.886719 15.34375 40.328125 22.421875 40.144531 C 21.558594 39.410156 20.46875 39.191406 18.058594 39.070312 C 18.875 38.769531 19.503906 38.640625 20.433594 38.542969 C 17.71875 36.546875 25.453125 40.472656 22.082031 36.121094 C 25.695312 37.71875 24.09375 36.429688 21.9375 34.863281 C 25.179688 35.667969 24.007812 34.871094 22.308594 32.492188 C 23.058594 32.609375 24.710938 33.96875 24.558594 32.476562 C 24.476562 29.757812 24.335938 27.042969 24.304688 24.324219 C 23.765625 22.167969 24.917969 -3.425781 27.148438 2.703125 C 27.207031 2.203125 27.246094 1.875 27.296875 1.46875 C 28.15625 2.574219 28.527344 2.777344 28.3125 1.183594 C 28.785156 1.566406 29.191406 1.894531 29.710938 2.316406 C 29.640625 1.671875 29.589844 1.183594 29.527344 0.613281 C 32.527344 4.9375 37.746094 7.054688 39.796875 12.246094 C 40.753906 10.472656 40.710938 14.171875 41.683594 12.902344 C 41.871094 13.390625 42.027344 13.792969 42.226562 14.304688 C 42.351562 14.039062 42.433594 13.867188 42.582031 13.542969 C 42.84375 14.179688 43.058594 14.714844 43.316406 15.34375 C 43.519531 14.808594 43.691406 14.363281 43.859375 13.914062 C 44.351562 14.308594 44.15625 17.265625 44.847656 15.359375 C 45.554688 16.746094 49.710938 21.714844 49.507812 18.691406 C 49.964844 19.316406 50.40625 19.910156 50.949219 20.644531 C 50.902344 19.320312 51.355469 20.125 52.085938 20.609375 C 52.507812 16.730469 51.683594 11.96875 52.816406 8.683594 C 53.035156 10.832031 52.421875 21.886719 53.316406 19.898438 C 54.582031 22.078125 53.886719 19.675781 53.527344 18.613281 C 54.054688 18.71875 54.398438 19.960938 54.863281 20.476562 C 55.34375 18.964844 55.40625 19.839844 55.441406 20.925781 C 55.890625 18.902344 56.234375 16.875 57.238281 15.035156 C 56.59375 18.984375 54.882812 21.78125 59.511719 23.625 C 59.945312 21.496094 60.15625 21.863281 60.390625 23.886719 C 61.246094 22.957031 62.890625 20.46875 62.066406 23.152344 C 62.355469 22.980469 62.566406 22.851562 62.875 22.667969 C 62.789062 23.558594 62.699219 23.941406 63.574219 23.320312 C 63.792969 25.496094 66.269531 21.953125 67.28125 22.3125 C 63.675781 26.609375 70.832031 22.117188 70.070312 24.484375 C 71.171875 24.410156 74.894531 22.601562 74 23.777344 C 75.875 21.304688 75.320312 16.566406 75.90625 13.070312 C 76.496094 12.640625 76.0625 20.09375 76.304688 22.296875 C 77.488281 21.644531 77.78125 20.703125 77.238281 22.824219 C 79.683594 21.023438 78.273438 16.519531 80.246094 13.90625 C 80.195312 15.929688 78.242188 23.910156 80.636719 19.445312 C 80.183594 24.394531 85.785156 14.582031 87.410156 13.410156 C 90.730469 8.761719 95.632812 6.089844 99.871094 2.511719 C 99.609375 4.492188 103.167969 1.929688 104.199219 1.277344 C 103.828125 2.785156 103.171875 3.378906 105.308594 2.324219 C 105.113281 2.730469 104.980469 3.007812 104.804688 3.375 C 108.679688 1.15625 107.417969 22.175781 106.785156 25.660156 C 106.445312 27.359375 108.648438 24.429688 107.738281 26.164062 C 105.949219 29.265625 107.011719 33.027344 105.691406 36.367188 C 107.28125 34.484375 107.34375 34.804688 106.339844 37.035156 C 107.269531 36.507812 108.054688 35.46875 108.839844 35.382812 C 108.375 36.550781 106.40625 37.515625 106.390625 38.457031 C 109.074219 36.796875 109.300781 36.808594 106.914062 39.226562 C 108.699219 39.550781 108.769531 39.339844 108 40.726562 C 109.761719 40.101562 111.652344 39.144531 109.242188 41.222656 C 109.765625 41.246094 110.144531 41.261719 110.445312 41.277344 C 109.59375 41.78125 108.089844 42.183594 107.476562 42.773438 C 108.738281 42.695312 111.464844 41.6875 109.511719 43.621094 C 118.265625 41.859375 131.15625 43.191406 133.394531 53.617188 C 133.640625 55.1875 133.683594 56.394531 132.492188 54.402344 C 132.378906 56.132812 132.34375 58.835938 130.980469 60.054688 Z M 82.117188 22.433594 C 82.699219 22.265625 83.277344 22.097656 83.949219 21.90625 C 81.445312 24.878906 82.484375 25.066406 84.660156 22.359375 C 87.570312 17.257812 90.414062 12.074219 95.527344 8.863281 C 89.480469 9.644531 86.570312 18.847656 82.117188 22.433594 Z M 28.0625 30.960938 C 25.125 29.527344 27.179688 31.664062 28.015625 33.148438 C 27.347656 33.417969 26.425781 32.289062 25.636719 32.007812 C 25.886719 34.324219 28.730469 37.636719 31.125 36.09375 C 31.917969 35.082031 29.398438 34.070312 29.21875 32.855469 C 30.203125 32.933594 31.195312 34.289062 32.589844 34.230469 C 27.042969 29.84375 33.300781 33.8125 36.339844 32.085938 C 34.503906 30.746094 32.660156 29.402344 30.675781 27.953125 C 31.382812 28.015625 31.941406 28.0625 32.539062 28.117188 C 32.3125 27.777344 32.105469 27.460938 31.828125 27.039062 C 37.785156 30.421875 33.691406 25.917969 29.988281 25.972656 C 32 25.019531 34.035156 26.300781 36.144531 26.429688 C 35.671875 24.808594 34.539062 23.992188 33.1875 23.175781 C 35.3125 23.09375 36.90625 24.03125 38.492188 25.019531 C 36.6875 21.988281 33.558594 20.972656 30.410156 19.664062 C 34.367188 19.339844 37.398438 21.769531 40.730469 23.496094 C 37.953125 21.003906 34.621094 17.917969 31.6875 15.171875 C 34.417969 15.570312 36.027344 17.65625 38.042969 19.128906 C 37.195312 15.542969 32.917969 14.367188 30.992188 11.429688 C 32.609375 11.910156 34.265625 13.613281 36.28125 14.15625 C 35.136719 10.507812 30.269531 10.25 29.171875 6.734375 C 38.285156 9.660156 38.660156 14.394531 43.570312 21.664062 C 43.324219 17.214844 44.992188 24.5 45.070312 20.121094 C 50.203125 22.398438 49.453125 21.722656 45.601562 18.632812 C 45.660156 19.007812 45.726562 19.429688 45.820312 20.03125 C 35.359375 8.457031 24.394531 -8.890625 25.683594 20.082031 C 25.429688 19.863281 25.253906 19.714844 25.003906 19.5 C 24.695312 23.707031 26.484375 27.238281 28.0625 30.960938 Z M 33.082031 54.832031 C 37.355469 54.863281 41.566406 54.800781 45.757812 55.425781 C 42.039062 53.011719 33.316406 55.902344 31.605469 52.726562 C 34.714844 54.3125 29.785156 49.765625 29.058594 48.691406 C 29.253906 48.722656 29.511719 48.761719 29.875 48.820312 C 28.644531 47.539062 27.496094 46.339844 26.34375 45.144531 C 27.730469 45.097656 29.539062 47.832031 30.933594 47.945312 C 28.148438 44.574219 26.449219 43.382812 30.976562 46.449219 C 29.539062 44.953125 30.542969 45.511719 31.738281 46.226562 C 31.640625 45.558594 30.578125 44.871094 30.039062 44.078125 C 30.917969 44.441406 31.652344 44.746094 32.390625 45.054688 C 27.902344 40.550781 21.164062 40.578125 15.386719 42.304688 C 13.804688 42.746094 6.875 47.289062 9.597656 46.691406 C 7.933594 48.335938 6.277344 49.957031 5.335938 52.308594 C 5.59375 52.121094 5.734375 52.015625 5.894531 51.898438 C 5.703125 52.527344 3.992188 54.515625 5.289062 54.027344 C 5.242188 55.265625 5.015625 56.511719 6.054688 57.429688 C 6.738281 55.722656 6.851562 56.953125 7.144531 58.113281 C 7.996094 56.730469 7.984375 58.214844 8.425781 59.109375 C 8.832031 57.160156 9.660156 59.710938 10.695312 58.808594 C 11.261719 58.519531 11.703125 58.46875 12.167969 58.917969 C 12.855469 57.429688 12.375 55.058594 11.738281 53.328125 C 10.921875 54.949219 11.078125 51.5625 10.820312 50.777344 C 10.484375 51.148438 10.191406 51.472656 9.835938 51.871094 C 9.839844 49.519531 8.203125 52.0625 7.175781 52.609375 C 7.941406 49.714844 10.371094 45.667969 13.210938 44.578125 C 12.78125 45.496094 11.332031 46.402344 11.089844 47.746094 C 12.039062 46.738281 13.007812 45.773438 14.523438 45.367188 C 14.191406 45.964844 13.929688 46.4375 13.605469 47.023438 C 14.4375 46.234375 15.15625 45.550781 15.976562 44.773438 C 16.3125 47.625 14.578125 49.355469 14.367188 52.007812 C 14.078125 51.453125 13.871094 51.058594 13.621094 50.578125 C 12.980469 52.917969 13.664062 54.972656 14.425781 57.210938 C 14.925781 56.460938 15.339844 55.847656 15.777344 55.199219 C 15.757812 57.554688 15.855469 58.015625 16.40625 58.472656 C 16.671875 55.550781 17.261719 56.46875 17.78125 58.816406 C 18.359375 57.769531 18.308594 56.671875 18.25 55.457031 C 18.660156 55.742188 18.988281 55.972656 19.292969 56.183594 C 17.8125 49.996094 21.035156 56.460938 21.65625 59.136719 C 26.859375 57.558594 20.085938 50.757812 23.511719 52.941406 C 22.621094 50.617188 20.972656 49.3125 18.921875 48.300781 C 19.136719 48.871094 19.320312 49.363281 19.507812 49.855469 C 17.613281 48.71875 15.621094 46.292969 17.128906 44.128906 C 17.296875 46.78125 19.625 47.921875 18.253906 45.253906 C 19.832031 45.480469 21.625 47.558594 23.261719 48.414062 C 23.15625 46.792969 21.894531 45.144531 24.265625 47.214844 C 24.460938 45.347656 26.40625 48.539062 27.367188 49.078125 C 26.894531 48.953125 26.527344 48.855469 26.132812 48.753906 C 26.476562 49.386719 26.785156 49.964844 27.128906 50.597656 C 20.710938 46.042969 26.660156 58.007812 26.351562 53.550781 C 27.21875 55.332031 26.894531 57.003906 26.492188 58.828125 C 27.167969 58.429688 27.617188 57.695312 27.644531 58.789062 C 29.863281 58.539062 29.769531 56.308594 29.042969 54.671875 C 30.828125 55.558594 30.371094 60.839844 32.917969 58.660156 C 33.742188 57.5 33.511719 56.125 33.082031 54.832031 Z M 43.738281 50.132812 C 39.488281 50.910156 35.191406 49.175781 30.859375 49.5625 C 37.195312 50.90625 44.121094 50.824219 50.054688 54.195312 C 48.410156 52.746094 46.359375 52.042969 44.367188 51.140625 C 45.054688 51.222656 48.164062 50.476562 46.828125 51.4375 C 49.890625 51.808594 52.347656 50.699219 54.605469 48.652344 C 53.964844 48.765625 53.4375 48.855469 52.882812 48.953125 C 53.160156 48.589844 53.410156 48.265625 53.664062 47.9375 C 43.949219 53.621094 41.296875 42.214844 34.578125 45.566406 C 44.894531 47.828125 32.75 47.3125 40.066406 48.332031 C 39.570312 48.480469 39.0625 48.628906 38.554688 48.777344 C 40.355469 49.0625 42.136719 49.136719 43.738281 50.132812 Z M 50.183594 48.582031 C 55.414062 47.550781 55.648438 40.164062 50.472656 38.746094 C 43.308594 36.914062 39.171875 47.339844 47.496094 48.757812 C 44.234375 46.515625 47.1875 38.007812 50.546875 42.425781 C 52.167969 44.367188 51.648438 46.675781 50.183594 48.582031 Z M 59.460938 55.425781 C 58.34375 55.273438 57.609375 54.613281 57.164062 53.609375 C 56.730469 51.363281 55.730469 52.429688 54.054688 53.113281 C 54.292969 52.523438 54.460938 52.105469 54.597656 51.769531 C 52.433594 53.832031 46.53125 56.976562 52.839844 55.527344 C 51.554688 56.78125 50.152344 57.683594 48.265625 57.679688 C 49.164062 56.328125 47.523438 57.152344 46.691406 57.058594 C 43.035156 57.101562 39.449219 57.832031 35.910156 58.707031 C 39.632812 58.519531 43.238281 57.433594 47.136719 57.523438 C 45.792969 58.339844 45.253906 58.816406 47.035156 58.011719 C 46.785156 58.449219 46.617188 58.738281 46.367188 59.175781 C 47.25 58.859375 47.949219 58.601562 48.746094 58.3125 C 47.179688 60.171875 50.359375 58.457031 51.238281 58.277344 C 49.941406 59.695312 52.464844 58.335938 53.144531 58.925781 C 53.257812 58.996094 53.578125 58.730469 53.800781 58.621094 C 53.980469 59.015625 53.980469 59.015625 56.152344 58.136719 C 55.933594 60.207031 56.984375 58.386719 57.699219 57.679688 C 56.085938 62.050781 60.460938 56.421875 60.113281 59.433594 C 62.882812 59.8125 61.453125 55.644531 59.460938 55.425781 Z M 69.445312 54.582031 C 71.128906 53.601562 68.5625 50.367188 68.746094 52.777344 C 67.519531 50.804688 56.796875 50.480469 58.808594 54.375 C 64.070312 52.210938 60.914062 56.605469 62.625 58.957031 C 64.316406 59.621094 62.578125 55.953125 64.089844 55.195312 C 64.574219 56.257812 64.394531 57.230469 64.535156 58.328125 C 65.367188 60.175781 66.722656 57.222656 65.582031 56.335938 C 65.226562 55.625 65.464844 54.671875 66.132812 54.136719 C 67.105469 52.96875 68.449219 55.867188 69.445312 54.582031 Z M 96.667969 50.21875 C 90.847656 51.175781 85.195312 52.738281 79.757812 55.050781 C 79.21875 55.277344 78.675781 55.628906 78.152344 54.707031 C 78.152344 55.226562 78.152344 55.496094 78.152344 55.914062 C 76.628906 54.082031 74.515625 53.6875 72.488281 53.042969 C 73.792969 54.824219 73.636719 54.957031 71.800781 53.722656 C 71.886719 55.453125 68.429688 55.121094 67.273438 56.167969 C 66.652344 57.046875 66.117188 58.617188 66.351562 59.46875 C 66.980469 58.539062 69.480469 59.644531 70.964844 59.632812 C 70.613281 58.964844 70.367188 58.5 70.0625 57.921875 C 72.707031 60.433594 71.695312 58.582031 73.492188 59.140625 C 74.285156 60.027344 74.519531 59.15625 74.394531 58.472656 C 75.304688 58.300781 75.933594 58.90625 76.707031 59.222656 C 77.121094 58.671875 77.277344 58.960938 77.714844 59.335938 C 78.414062 57.976562 80.078125 59.613281 81.265625 59.566406 C 79.386719 57.398438 80.765625 58.902344 82.402344 58.863281 C 78.210938 55.9375 96.339844 55.347656 98.292969 54.570312 C 94.707031 54.722656 91.089844 54.78125 87.566406 55.335938 C 84.890625 55.734375 82.429688 57.511719 79.691406 57.441406 C 78.691406 57.015625 79.441406 56.53125 80.296875 56.730469 C 77.210938 54.292969 96.421875 51.019531 99.011719 50.40625 C 104.578125 49.382812 99.308594 49.695312 96.667969 50.21875 Z M 74.585938 47.824219 C 74.816406 50.320312 76.996094 52.710938 79.390625 53.238281 C 79.136719 52.703125 77.402344 51.132812 78.894531 51.5 C 81.742188 52.195312 84.214844 50.71875 87.128906 50.851562 C 84.984375 49.820312 86.832031 49.96875 88.222656 49.832031 C 87.332031 48.589844 92.679688 47.238281 93.984375 46.140625 C 92.242188 45.199219 90.644531 44.542969 88.691406 44.921875 C 93.128906 45.898438 79.332031 53.648438 74.585938 47.824219 Z M 85.984375 42.621094 C 82.136719 34.363281 68.628906 43.425781 77.496094 48.46875 C 76.253906 46.058594 76.929688 41.90625 79.964844 41.628906 C 82.511719 43.222656 83.410156 46.410156 81.453125 48.914062 C 84.996094 49.15625 87.359375 45.820312 85.984375 42.621094 Z M 103.359375 47.183594 C 96.476562 44.542969 94.035156 44.785156 103.15625 44.75 C 101.378906 43.4375 99.390625 43.222656 97.492188 42.742188 C 99.914062 42.304688 102.28125 42.585938 104.636719 43.148438 C 103.769531 42.136719 102.480469 42.039062 101.285156 41.503906 C 102.601562 40.929688 103.789062 40.355469 104.808594 39.175781 C 103.945312 39.175781 103.25 39.175781 102.441406 39.175781 C 103.902344 37.109375 105.441406 35.238281 105.21875 32.476562 C 104.90625 32.972656 104.679688 33.332031 104.410156 33.761719 C 104.324219 33.28125 104.253906 32.894531 104.160156 32.363281 C 101.097656 38.757812 103.496094 31.519531 104.378906 28.628906 C 104.265625 28.710938 104.140625 28.804688 103.886719 28.988281 C 104.382812 27.679688 107.199219 21.367188 105.09375 23.800781 C 106.574219 14.660156 109.40625 -3.484375 94.839844 7.523438 C 97.050781 6.746094 101.339844 5.144531 103.167969 6.046875 C 100.136719 7.546875 97.347656 9.355469 95.152344 11.988281 C 95.972656 11.792969 96.796875 11.601562 97.621094 11.410156 C 95.191406 13.707031 92.539062 15.199219 90.804688 18.199219 C 92.839844 17.1875 94.496094 15.8125 96.542969 15.152344 C 94.742188 18.554688 92.457031 21.578125 89.867188 24.417969 C 92.722656 23.066406 95.695312 22.476562 98.835938 22.78125 C 96.675781 23.660156 94.464844 24.429688 92.808594 26.238281 C 95.542969 26.230469 103.855469 28.722656 97.96875 30.027344 C 105.769531 33.96875 95.460938 33.089844 92.300781 30.996094 C 93.226562 30.851562 93.988281 30.734375 94.753906 30.613281 C 91.773438 29.71875 88.320312 30.539062 85.449219 28.804688 C 90.160156 27.589844 86.414062 27.992188 83.757812 28.300781 C 85.625 27.078125 87.789062 26.839844 89.886719 26.355469 C 86.519531 25.316406 81.597656 29.519531 84.511719 24.179688 C 82.355469 25.574219 80.527344 27.867188 81.0625 23.738281 C 79.742188 24.34375 77.503906 26.289062 78.820312 23.835938 C 76.402344 25.023438 75.703125 26.703125 76.765625 28.695312 C 77.128906 25.75 77.789062 25.054688 77.59375 28.503906 C 80.996094 23.3125 75.226562 33.492188 80.457031 28.808594 C 79.628906 30.171875 78.789062 31.476562 78.335938 32.984375 C 79.113281 32.113281 79.953125 31.355469 81.074219 30.949219 C 80.582031 31.722656 80.105469 32.476562 79.625 33.230469 C 80.953125 32.363281 82.007812 31.1875 83.542969 30.714844 C 81.457031 33.058594 78.78125 35.917969 75.894531 36.664062 C 76.132812 35.910156 77.027344 34.253906 75.746094 35.4375 C 75.359375 32.136719 75.726562 28.902344 76.066406 25.585938 C 75.402344 26.085938 74.757812 26.570312 73.976562 27.15625 C 75.722656 22.3125 71.359375 27.984375 70.570312 29.835938 C 70.425781 28.78125 71.234375 27.101562 71.40625 25.855469 C 68.800781 28.988281 64.820312 34.089844 66.414062 26.34375 C 65.335938 27.957031 64.910156 28.71875 63.988281 26.511719 C 64.101562 28.132812 64.203125 29.613281 64.308594 31.09375 C 63.050781 29.265625 60.933594 25.546875 59.023438 25.339844 C 59.628906 26.417969 60.277344 27.570312 60.925781 28.71875 C 59.4375 27.789062 58.042969 25.46875 55.878906 24.804688 C 55.5625 27.292969 55.351562 29.722656 54.355469 32.003906 C 52.65625 29.125 54.386719 25.75 54.757812 22.722656 C 53.339844 25.667969 52.085938 30.140625 54.0625 33.441406 C 51.433594 32.519531 53.992188 35.167969 54.421875 36.3125 C 52.667969 35.691406 50.75 33.492188 48.835938 32.261719 C 49.164062 32.992188 49.441406 33.605469 49.785156 34.363281 C 48.089844 33.449219 46.835938 32.328125 46 30.589844 C 48.699219 31.988281 47.15625 30.386719 47.457031 28.636719 C 50.480469 31.851562 48.941406 29.582031 49.535156 26.730469 C 50.015625 27.5 52.046875 30.429688 51.945312 28.464844 C 51.863281 26.773438 53.777344 21.0625 50.371094 22.996094 C 48.085938 25.773438 48.996094 21.125 47.074219 25.3125 C 45.429688 21.660156 46.078125 25.21875 46.382812 27.246094 C 45.8125 26.46875 45.300781 25.769531 44.789062 25.070312 C 44.214844 25.726562 46.753906 28.269531 44.609375 27.476562 C 46.089844 29.726562 44.46875 27.914062 43.394531 27.90625 C 46.269531 32.8125 40.84375 29.710938 42.652344 31.566406 C 40.339844 32.070312 33.9375 32.667969 38.695312 34.53125 C 35.371094 35.953125 31.9375 37.574219 28.304688 38.019531 C 30.304688 39.015625 32.644531 38.488281 34.726562 39.613281 C 31.738281 40.011719 28.894531 40.785156 26.546875 38.457031 C 27.371094 40.101562 28.621094 40.910156 30.277344 41.132812 C 31.613281 41.136719 38.125 42.449219 34.433594 42.738281 C 36.558594 43.933594 38.722656 43.136719 40.964844 40.660156 C 39.589844 40.933594 38.3125 41.191406 37.03125 41.449219 C 38.746094 40.292969 41.125 39.480469 43.101562 38.417969 C 43.011719 38.75 42.929688 39.058594 42.824219 39.453125 C 43.9375 38.675781 46.722656 37.640625 43.914062 37.851562 C 45.296875 36.605469 46.882812 36.542969 48.507812 36.484375 C 48.128906 36.300781 47.746094 36.121094 47.363281 35.9375 C 54.523438 35.984375 56.855469 43.511719 56.949219 46.429688 C 63.132812 41.105469 53.945312 36.414062 56.269531 31.851562 C 56.398438 32.367188 56.535156 32.90625 56.699219 33.554688 C 56.929688 33.078125 57.082031 32.761719 57.230469 32.445312 C 57.601562 36.648438 61.664062 39.394531 60.023438 43.917969 C 61.414062 42.21875 61.996094 40.335938 62.429688 38.210938 C 63.128906 40.933594 62.207031 43.082031 60.847656 45.136719 C 61.695312 44.722656 62.542969 44.308594 63.390625 43.890625 C 61.78125 45.285156 59.707031 46.222656 58.878906 48.3125 C 63.324219 45.15625 56.621094 50.898438 60.5625 50.925781 C 63.148438 50.882812 65.734375 50.867188 68.320312 50.8125 C 71.882812 50.539062 68.292969 47.34375 67.898438 46.15625 C 68.636719 46.632812 69.351562 47.621094 70.117188 47.832031 C 68.964844 45.847656 68.496094 44.984375 70.570312 46.984375 C 70.007812 44.949219 67.507812 43.898438 68.058594 41.496094 C 68.4375 42.152344 68.78125 42.742188 69.167969 43.410156 C 69.441406 41.035156 69.253906 38.796875 70.609375 36.800781 C 70.5 38.027344 70.390625 39.234375 70.769531 40.367188 C 71.980469 38.265625 73.1875 36.164062 74.398438 34.066406 C 73.5 38.363281 69.210938 43.019531 73.28125 47.078125 C 72.8125 44.390625 74.644531 42.539062 74.699219 39.929688 C 75.136719 41.378906 77.59375 36.675781 80.269531 36.582031 C 78.882812 38.511719 83.492188 35.925781 84.921875 36.792969 C 80.136719 38.046875 86.402344 37.621094 88.25 38.589844 C 87.539062 38.648438 86.828125 38.710938 86.117188 38.773438 C 89.398438 40.394531 92.84375 41.621094 95.871094 44.050781 C 94.457031 44.050781 93.226562 44.050781 91.992188 44.050781 C 95.59375 45.558594 99.285156 48.109375 103.359375 47.183594 Z M 130.648438 57.246094 C 130.511719 57.652344 130.425781 57.917969 130.339844 58.179688 C 131.890625 56.425781 131.648438 54.378906 131.25 52.167969 C 131.6875 52.523438 132.015625 52.789062 132.414062 53.113281 C 131.800781 51.125 130.222656 48.835938 129.082031 48.484375 C 129.335938 49.261719 130.523438 50.417969 130.289062 51.066406 C 126.972656 44.566406 118.714844 43.074219 112.140625 44.449219 C 112.296875 44.257812 112.464844 44.054688 112.683594 43.789062 C 107.867188 44.480469 105.035156 46.609375 104.109375 48.839844 C 109.152344 45.605469 101.355469 51.148438 102.039062 54.40625 C 102.472656 53.265625 102.925781 52.238281 103.898438 51.332031 C 103.246094 52.925781 102.003906 55.351562 102.535156 56.695312 C 102.652344 55.738281 102.886719 54.886719 103.789062 54.203125 C 103.933594 56.417969 102.472656 59.472656 104.71875 56.292969 C 104.601562 57.074219 104.492188 57.773438 104.363281 58.644531 C 106.128906 54.457031 106.550781 61.171875 107.734375 56.761719 C 107.742188 56.324219 107.726562 55.933594 108.449219 56.167969 C 108.324219 55.09375 108.210938 54.128906 108.09375 53.128906 C 108.816406 53.699219 108.800781 52.25 109.125 51.820312 C 109.765625 53.371094 109.144531 56.019531 109.351562 57.929688 C 110.070312 57.257812 110.296875 55.957031 110.261719 57.964844 C 112.589844 57.335938 111.832031 57.953125 112.792969 54.859375 C 113.1875 55.921875 112.917969 56.957031 112.773438 58.03125 C 115.335938 54.871094 112.984375 50.097656 110.386719 47.480469 C 110.800781 47.566406 111.085938 47.625 111.449219 47.703125 C 109.707031 42.804688 116.539062 53.308594 114.738281 57.046875 C 117.367188 55.449219 115.671875 57.066406 114.515625 58.472656 C 115.976562 58.363281 117.347656 57.445312 116.722656 59.5 C 117.769531 58.429688 118.433594 55.757812 116.53125 57.46875 C 117.175781 55.652344 117.410156 54.078125 117.378906 52.15625 C 119.195312 53.71875 118.851562 55.78125 118.632812 57.886719 C 120.886719 56.34375 121.519531 52.40625 120.910156 57.234375 C 121.890625 55.945312 121.921875 54.40625 121.910156 52.851562 C 122.628906 53.523438 122.308594 55.546875 122.667969 56.761719 C 124.539062 54.515625 123.15625 57.46875 122.828125 58.824219 C 125.484375 57.550781 124.941406 55.128906 125.070312 52.972656 C 127.203125 54.03125 127.679688 55.941406 126.546875 58.757812 C 130.132812 57.003906 128.832031 52.796875 126.828125 50.234375 C 129.316406 51.789062 130.832031 55.363281 129.132812 58.082031 C 129.601562 57.824219 130.066406 57.566406 130.648438 57.246094 Z M 130.648438 57.246094 "
              />
            </svg>
          </a>
          <a href="index.html?" title="Home">Home</a>
          <a href="products.html?">Products</a>
          <a href="products.html?editable=true">My Products</a>
          </div>
        <div class="navbar icons">
          <input class="navicon" type="text" id="search-box" placeholder="Search..." autocomplete="off">
          <!-- <div class="popup" id="poponclick0"></div> -->

          <a href="#" class="navicon" id="searchProduct" title="Search">
            <svg viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19  11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
          <!-- <div class="popup" id="poponclick1"></div> -->

          <a href="#" class="navicon" id="click2" title="Cart">
            <div class="floatingnumber" id="cartContents">0</div>
            <svg viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.55514 14.2572C2.83668 10.9043 2.47745 9.22793 3.378 8.11397C4.27855 7 5.99302 7 9.42196 7H14.5781C18.0071 7 19.7215 7 20.6221 8.11397C21.5226 9.22793 21.1634 10.9043 20.4449 14.2572L20.0164 16.2572C19.5294 18.5297 19.2859 19.666 18.4608 20.333C17.6357 21 16.4737 21 14.1495 21H9.85053C7.52639 21 6.36432 21 5.53925 20.333C4.71418 19.666 4.47069 18.5297 3.98372 16.2572L3.55514 14.2572Z" stroke="#000000" stroke-width="2"></path> 
              <path d="M8 12H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
              <path d="M10 15H14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
              <path d="M18 9L15 3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
              <path d="M6 9L9 3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
          <div class="popup" id="poponclick2">
            <div id="label"></div>
            <div class="shopping-cart" id="shopping-cart"></div>
          </div>
      
          <a href="#" class="navicon" id="click3" title="User">
            <svg viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16   7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
          <div class="popup" id="poponclick3">
            <div class="authbox">
              <h2>Login</h2>
              <form action="">
                <!-- Login -->
                <div class="login-form">
                  <label for="username">Username</label>
                  <input type="text" id="username" placeholder="Username" autocomplete="off">

                  <label for="password">Password</label>
                  <input type="password" id="password" placeholder="Password" autocomplete="off">
                </div>

                <!-- Register -->
                <div class="register-form">
                  <label for="first-name">First Name</label>
                  <input disabled type="text" id="first-name" placeholder="First Name" autocomplete="off">

                  <label for="last-name">Last Name</label>
                  <input disabled type="text" id="last-name" placeholder="Last Name" autocomplete="off">

                  <label for="email">E-mail Adress</label>
                  <input disabled type="text" id="email" placeholder="E-mail Address" autocomplete="off">

                  <label for="confirm-email">Confirm E-mail Address</label>
                  <input disabled type="text" id="confirm-email" placeholder="Confirm E-mail Address" autocomplete="off">

                  <div class="captcha">
                    <label for="captcha">What is <strong>10 + 3</strong>?</label>
                    <input disabled type="text" id="captcha" placeholder="Your answer" autocomplete="off">
                  </div>
                </div>

                <!-- Logged In -->
                <!--
                <div class="logged-in-form"></div> --!>

                <!-- Submit -->
                <input type="submit" id="submit" value="Login" autocomplete="off">

                <!-- Help -->
                <a href="register.htm" class="register" title="Toggle">Register!</a>
                <a href="#forgotpassword" class="forgot-password" title="Forgot password?">Forgor?</a>
              </form>
            </div>
          </div>
        </div>
          `;
    }).join(""));
}
generateNavbar();

$(document).ready(function(){
	   
  // Easing equation based on
  // EaseInOutExpo by Robert Penner (c) 2001
  // robertpenner.com/easing_terms_of_use.html
  
  $.fn.extend( jQuery.easing, {
    eioe: function( ø, t, b, c, d ) {
      if(t==0) return b;
      if(t==d) return b+c;
      if( (t /= d/2) < 1 ) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
      return c/2 * ( -Math.pow( 2, -10 * --t ) + 2 ) + b;
    }
  });
  
  // Toggle disabled
  // http://stackoverflow.com/questions/4702000/jquery-toggle-input-disabled-attribute#comment5189637_4702086
  
  $.fn.toggleDisabled = function() {
    return this.each(function() {
      this.disabled = !this.disabled;
    });
  };
  
  $.fn.toggleAttr = function(a, v1, v2) {
    return this.each(function() {
      var $t = $(this),
          v  = $t.attr(a) === v1 ? v2 : v1;
      $t.attr(a, v)
        });
  };
  
  // Toggle login/register form
  $('.register').click(
    function(){
      // Toggle register form and enable inputs
      $('.register-form').slideToggle({
        easing: 'eioe',
        duration: 250
      }).find('input').toggleDisabled();
      
      // Change header
      // Login -> Register
      var $h2 = $('.box h2'),
          headerText = $h2.text() === "Login" 
          ? "Register" 
          : "Login";
      $h2.text(headerText);
      
      // Change submit button value
      // Login -> Register
      $('#submit').toggleAttr('value','Login','Register');
      
      // Change signup link
      // Signup -> Login link
      var $su = $('.register');
      $su.toggleAttr('href','register.htm','login.htm')
        var signupLinkText = $su.text() === "Register!" 
            ? "Login!" 
            : "Register!";
      $su.text(signupLinkText);
      
      // Hide Forgot password link
      $('.forgot-password').toggle();
      
      // Change form action
      // login.php -> register.php
      $('form').toggleAttr('action','login.php','register.php')
        return false;
    }
  );

  $('#submit').click(
    function() {
      var $h2 = $('.box h2')
      if($h2.text() === "Register") {
        // Register func
        // let usrName = $()
        console.log("User: ${}")
      } else {
        $('.register-form').slideToggle({
          easing: 'eioe',
          duration: 250
        }).find('input').toggleDisabled();
        
        $('.login-form').slideToggle({
          easing: 'eioe',
          duration: 250
        }).find('input').toggleDisabled();
      }
    }
  );

  var popupprevid = '--';
  $('.navicon').click(
    function() {
      // console.log(this.id+popupprevid)
      if(popupprevid !== this.id){
        $('.popup[display="block"]').slideToggle({
          easing: 'eioe',
          duration: 250
        }).toggleAttr('display','block','none');
      }
      
      $('#popon'+ this.id).slideToggle({
        easing: 'eioe',
        duration: 250
      }).toggleAttr('display','block','none');
      popupprevid = this.id;
    }
  );
  
  $('#searchProduct').click(
    function() {
      let editRes = new URLSearchParams(window.location.search).get('search') || "";
      let url = window.location.href; 
      window.location.href= url + '&search=' + document.getElementById("search-box").value
    } 
  );

  $('#search-box').keypress(
    function(event) {
      let editRes = new URLSearchParams(window.location.search).get('editable') || "";
      if(event.which === 13) window.location.href = 'http://127.0.0.1:5500/Phase1/frontend/src/products.html?editable=' + editRes + '&search=' + document.getElementById("search-box").value;
    }
  );
});
import { RouterProvider } from 'react-router-dom';
import { router } from './presentation/router/router';

export const MonGPT = () => {
  return (
    <RouterProvider router={ router } />
  )
}
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { OrthographyPage, ProsConsPage, TranslatePage, TextToAudioPage, ImageGenerationPage, AssistantPage, ImageTunningPage, AudioToTextPage } from '../pages';
import { DashboardLayout } from '../layouts/DashboardLayout';

export const menuRoutes = [
  {
    to: "/orthography",
    icon: "fa-solid fa-spell-check",
    title: "Orthographe",
    description: "Corriger l'orthographe",
    component: <OrthographyPage />
  },
  {
    to: "/pros-cons",
    icon: "fa-solid fa-code-compare",
    title: "Avantages & Inconvénients",
    description: "Comparer les avantages et les inconvénients",
    component: <ProsConsPage />
  },
  // {
  //   to: "/pros-cons-stream",
  //   icon: "fa-solid fa-water",
  //   title: "Comment diffuser",
  //   description: "Avec un stream de messages",
  //   component: <ProsConsStreamPage />
  // },
  {
    to: "/translate",
    icon: "fa-solid fa-language",
    title: "Traduire",
    description: "Textes vers d'autres langues",
    component: <TranslatePage />
  },
  {
    to: "/text-to-audio",
    icon: "fa-solid fa-podcast",
    title: "Texte en audio",
    description: "Convertir le texte en audio",
    component: <TextToAudioPage />
  },
  {
    to: "/audio-to-text",
    icon: "fa-solid fa-comment-dots",
    title: "Audio en texte",
    description: "Convertir l'audio en texte",
    component: <AudioToTextPage />
  },
  {
    to: "/image-generation",
    icon: "fa-solid fa-image",
    title: "Images",
    description: "Générer des images",
    component: <ImageGenerationPage />
  },
  {
    to: "/image-tunning",
    icon: "fa-solid fa-wand-magic",
    title: "Modifier l'image",
    description: "Génération continue",
    component: <ImageTunningPage />
  },
  
  {
    to: "/assistant",
    icon: "fa-solid fa-user",
    title: "Assistant",
    description: "Informations sur l'assistant",
    component: <AssistantPage />
  },
];


export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      ...menuRoutes.map( route => ({
        path: route.to,
        element: route.component
      })),
      {
        path: '',
        element: <Navigate to={ menuRoutes[0].to } />
      }

    ],
  }
])
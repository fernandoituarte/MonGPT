export const prosConsStreamUseCase = async (prompt: string) => {
  try {
    const resp = await fetch(
      `${import.meta.env.VITE_GPT_API}/pros-cons-discusser-stream`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
        // todo: abortSignal
      }
    );

    if (!resp.ok) throw new Error("La comparaison n'a pas pu être effectuée");

    const reader = resp.body?.getReader();
    if (!reader) {
      return null;
    }

    return reader;
  } catch (error) {
    console.log(error);
    return null;
  }
};

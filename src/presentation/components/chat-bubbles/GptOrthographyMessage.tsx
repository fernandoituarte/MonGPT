interface Props {
  userScore: number;
  errors: string[];
  message: string;
}

export const GptOrthographyMessage = ({
  userScore,
  errors,
  message,
}: Props) => {
  return (
    <div className="col-start-1 col-end-12 md:col-end-9 p-3 rounded-lg">
      <div className="flex flex-col md:flex-row items-start">
        <div className="flex items-center justify-center mb-2 h-10 w-10 rounded-full bg-green-600 flex-shrink-0">
          F
        </div>
        <div className="relative ml-3 text-sm bg-black bg-opacity-25 pt-3 pb-2 px-4 shadow rounded-xl">
        <h3 className="text-3xl">Score : {userScore}%</h3>
          <p>{message}</p>

          {errors.length === 0 ? (
            <p>Aucun erreur trouvée, parfait !</p>
          ) : (
            <>
              <h3 className="text-2xl">Erreurs trouvées</h3>
              <ul>
                {errors.map((error, i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

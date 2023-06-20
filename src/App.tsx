import { ErrorBanner, PushUpCounter } from "./features";
import { useWindowDimensions } from "./shared";

function App() {

  const { width } = useWindowDimensions();

  return (
    <div>
      { width <= 768 ? (
      <PushUpCounter />
      ) : (
        <ErrorBanner />
      ) }
    </div>
  );
}

export default App;
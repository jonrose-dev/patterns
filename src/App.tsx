import { Accordion, ComponentWithinComponent, DerivedState, Memoization, EffectDependencies } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Accordion title="Component within component">
        <ComponentWithinComponent />
      </Accordion>
      <Accordion title="Derived State">
        <DerivedState />
      </Accordion>
      <Accordion title="Memoization">
        <Memoization />
      </Accordion>
      <Accordion title="Effect Dependencies">
        <EffectDependencies />
      </Accordion>
    </div>
  );
}

export default App;

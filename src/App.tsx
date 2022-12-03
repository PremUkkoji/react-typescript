import "./App.css";
import { Button } from "./components/props/Button";
import { Container } from "./components/props/Container";
import { Greet } from "./components/props/Greet";
import { Heading } from "./components/props/Heading";
import { Input } from "./components/props/Input";
import { Oscar } from "./components/props/Oscar";
import { Person } from "./components/props/Person";
import { PersonList } from "./components/props/PersonList";
import { Status } from "./components/props/Status";

function App() {
  return (
    <div className="App">
      {/* Learning Props */}
      <Greet name="Prem" isLoggedIn={false} />
      <Greet name="Prem" isLoggedIn={true} />
      <Status status="success" />
      <Heading>Heading text goes here</Heading>
      <Oscar>
        <Heading>Oscar goes to Prem Ukkoji</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
      <Container styles={{ border: "1px solid white", padding: "1rem" }} />
      <Person
        name={{
          first: "Prem",
          last: "Ukkoji",
        }}
      />
      <PersonList
        names={[
          { first: "Prem", last: "Ukkoji" },
          { first: "P", last: "U" },
        ]}
      />
    </div>
  );
}

export default App;

import "./App.css";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { Button } from "./components/props/Button";
import { Container } from "./components/props/Container";
import { Greet } from "./components/props/Greet";
import { Heading } from "./components/props/Heading";
import { Input } from "./components/props/Input";
import { Oscar } from "./components/props/Oscar";
import { Person } from "./components/props/Person";
import { PersonList } from "./components/props/PersonList";
import { Status } from "./components/props/Status";
import { DomRef } from "./components/refs/DomRef";
import { MutableRef } from "./components/refs/MutableRef";
import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Counter as ClassCounter } from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateLiterals/Toast";
import { CustomButton } from "./components/html/Button";
import { CustomInput } from "./components/html/Input";
import { Text } from "./components/polymorphic/Text";

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

      {/* Learning State */}
      <LoggedIn />
      <User />
      <Counter />

      {/* Learning Context */}
      <ThemeContextProvider>
        <Box defaultTheme={false} />
        <Box defaultTheme={true} />
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      {/* Learning refs */}
      <DomRef />
      <MutableRef />

      {/* Learning classes */}
      <ClassCounter message="class message" />

      {/* Learning Components */}
      <Private isLoggedIn={true} component={Profile} />

      {/* Learning generics */}
      <List
        items={["Batman", "Superman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} />

      {/* Restrictions */}
      <RandomNumber value={10} isPositive={true} />

      {/* Template Literals */}
      <Toast position="right-top" />

      {/* Wrapping html */}
      <CustomButton variant="primary" onClick={(e) => console.log(e)}>
        Primary Button
      </CustomButton>
      <CustomInput />

      {/* Polymorphic Components */}
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet'
import Welcome from './Component/Welcome'
import Hello from './Component/Hello'
import Message from './Component/Message'
import Counter from './Component/Counter'
import EventBind from './Component/EventBind'
import UserGreeting from './Component/UserGreeting';
import NameList from './Component/NameList'
import StyleSheet from './Component/StyleSheet'
import Inline from './Component/Inline'
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './Component/Form'
import LifecycleA from './Component/LifecycleA'
import RefDemo from './Component/RefDemo'
import Hero from './Component/Hero'
import ErrorBoundary from './Component/ErrorBoundary';
import ComponentC from './Component/ComponentC'
import { UserProvider } from './Component/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ComponentC value="Sneha"></ComponentC>
      </UserProvider>

      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}


      {/* <RefDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form></Form> */}
      {/* <h1 className="Error">Error</h1>
      <h1 ClassName={styles.success}>Success</h1>
      <StyleSheet />
      <Inline /> */}
      {/* <Greet name="Sneha" id="1"> This is first greet</Greet>
      <Greet name="Sneha1" id="2"> This is 2nd greet</Greet>
      <Greet name="Sneha2" id="3">This is 3rd greet</Greet>
      <Welcome name="Sneha" id="1">This is Child attibute of Welcome</Welcome>
      <Hello/>
      <Message/>
      <Counter/>
      <EventBind/>
      <UserGreeting/> */}
      {/* <NameList/> */}

    </div>
  );
}

export default App;

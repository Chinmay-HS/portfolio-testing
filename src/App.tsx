
import './App.css'
import { NavigationMenuDemo } from './main-components/NavigationMenu'
import { TextEffect } from './components/ui/text-effect'
import { MorphingDialogBasicOne } from './main-components/MorphingDialogueBasicOne'

function App() {
  

  return (
    <>
      <NavigationMenuDemo />
      <TextEffect per='char' preset='fade'>
        This is my test text effect.
      </TextEffect>
      <MorphingDialogBasicOne />
      <p className="read-the-docs">
        This is a playground.
      </p>
    </>
  )
}

export default App

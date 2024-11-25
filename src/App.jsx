import  Navbar from"./Components/Navbar"
import Agenda from "./Components/Agenda"
import Speakers from"./Components/Speakers"
import RegistrationForm from"./Components/RegistrationForm"
import Footer from "./Components/Footer"
import ContactForm from "./Components/ContactForm"
import MoreDetailes from "./Components/MoreDetailes"
import Sponsors from "./Components/Sponsors"



function App() {

  return (
    <div>
       <Navbar/>
      <Agenda />
      <Speakers/>
      <Sponsors/>
      <MoreDetailes/>
      <RegistrationForm/>
      <ContactForm/>
      <Footer/>
      


     

    </div>

  )
}

export default App
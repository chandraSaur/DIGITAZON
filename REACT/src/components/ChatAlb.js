//creare una chat composta da più componenti che metta in relazione i componenti stessi per creare un box visualizzatore di messaggi
//la chat avrà quindi un componente madre che racchiuderà i vari componenti
//a sua volta suddiviso in MainChat che conterrà i messaggi della chat
//MessageBar che conterrà User + Message + SendButton
//una volta cliccato il SendButton tutto ciò che viene inserito nel campo User e nel campo Message comparirà a schermo in ContainerChat
//inizio con il creare i vari componenti
//avrò un componente default padre che sarà MyApp in cui al suo interno ci sarà il MainChat ovvero lo scope dove compariranno i messaggi e la mia MessageBar ovvero l'insieme dei miei due output(User,Message) e il Button per inviarli nel MainChat

// come metto in relazione MessageBar con Mainchat?

// creo all'interno di MessageBar due useState
//1- per l'input User ----(vedi giù: u.)
//1-per l'input Message -----(vedi giù: m.)
// avranno un value che si collega al primo elemento dell'useState relativo
// a tutti e due legherò il metodo onChange che si collegherà alla funzione dell'useState relativo

// ora dobbiamo creare il collegamento tra il click sul bottone e la comparsa del nostro testo user e testo message dentro la MainChat quindi abbiamo bisogno di andare nel nostro componente principale di default e creare una funzione che chiameremo onNewMessage() questa funzione prenderà come parametri (from,text)
// creiamo un useState nel nostro componente principale di default
//questo useState avrà il compito di far comunicare la nostra MessageBar con la nostra MainChat esso sarà formato così let [messages, setMessages] = useState([]) ---> prenderà un array in entrata all' useState e questo perchè sarà proprio un array di x elementi (cioè i messaggi che scriveremo nell'input user e nell'input message ) a venir presi in considerazione e pushati dentro un array. il nostro array verrà poi analizzato grazie al metodo map all'interno del componente MainChat e verranno prodotti tanti <li> <span> </span> </li> quanti sono i nostri messaggi
//la chiave per ottenere questo collegamento la otteniamo collegando un onClick al nostro bottone che una volta cliccato dovrà spedire i dati scritti nei due input vicini alla MainChat
//per farlo utilizza una funzione che prende come parametri i due primi elementi degli state degli input ovvero user & msg
//la funzione che utilizzeremo connquesti parametri andrà però definita nella nostra funzione di default principale essa avrà inizialmente due parametri non argomentati/definiti che solo in seguito nell' onClick saranno dichiarati in vista dell'evocazione della funzione
//ecco la funzione qua giù riportata

//function onNewMessage(from, text) {
//  let newMessage = [...messages];
// newMessage.push({ from, text });
//  setMessages(newMessage);

//la funzione onNewMessage sarà quindi il riassunto di ciò che succede all'interno della nostra MessageBar collegheremo dunque il suo funzionamento al componente riportato nella default <MessageBar onNewMessage={onNewMessage} />
//mentre la MAinChat riceverà i messaggi <MainChat messages={messages} /> PASSEREMO QUINDI GLI STESSI COME PARAMETRI DEI COMPONENTI AL DI FUORI DELLA FUNZIONE DI DEFAULT

import { useState } from "react";
import "./ChatAlb.css"

function MainChat({ messages }) {
  return (
    <div className="mainChat">
      {messages.length === 0 ? (
        <span className="nomsg">no messages...</span>
      ) : (
        <ol>
          {messages.map((m) => (
            <li>
              <span>{m.from}:</span>
              {m.text}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

function MessageBar({ onNewMessage }) {
  //value,fn
  let [user, setUser] = useState(""); //u.
  let [msg, setMsg] = useState(""); //m.

  return (
    <div className="messageBar">
      <input
        className="user"
        placeholder="User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        className="message"
        placeholder="Write a Message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button onClick={() => onNewMessage(user, msg)}> Send Message </button>
    </div>
  );
}

export default function MyApp() {
  let [messages, setMessages] = useState([]);
  function onNewMessage(from, text) {
    let newMessage = [...messages];
    newMessage.push({ from, text });
    setMessages(newMessage);
    console.log(from, text);
  }
  return (
    <div>
      <h1>Chat</h1>
      <MainChat messages={messages} />
      <MessageBar onNewMessage={onNewMessage} />
    </div>
  );
}

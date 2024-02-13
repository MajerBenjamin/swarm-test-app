import React, { useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from "react-use-websocket"

export interface IMessage {
    id: string,
    message: string
}

const WebsocetComponent = () => {
    const WS_URL = "ws://127.0.0.1:443"
    const [messages, setMessages] = useState<IMessage[]>([])
    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
        WS_URL,
        {
            share: false,
            shouldReconnect: () => true,
        },
    )

    // Run when a new WebSocket message is received (lastJsonMessage)
    useEffect(() => {
        setMessages(s => [...s, lastJsonMessage as IMessage])
        console.log(`Got a new message: ${lastJsonMessage}`)
    }, [lastJsonMessage])

    const sendMessage = () => {
        if (readyState === ReadyState.OPEN) {
            sendJsonMessage({
                id: Date.now().toString(),
                message: "websocet working"
            } as IMessage)
        }
    }



    const render = () => {
        return (
            <>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >
                    {messages.map(item => {
                        if (item) {
                            return <div className="text-white bg-blue-900 p-6 my-4 mx-4">
                                <p>{item.id}</p>
                                <p>{item.message}</p>
                            </div>
                        }
                    })}
                    <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                        <button
                            type="button"
                            onClick={sendMessage}
                            className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                            Websocket message
                            <svg
                                className="w-4 h-4 ml-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </>
        )
    }

    return render()
}

export default WebsocetComponent;
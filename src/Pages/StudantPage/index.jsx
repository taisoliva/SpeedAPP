import { Link } from "react-router-dom"
import * as Styled from "./styled"
import { FaWhatsapp } from "react-icons/fa"
import { CircularProgressbar } from "react-circular-progressbar"
import {datas} from "../../utils/datas"
import Class from "../../components/Classes"
import { useContext, useEffect, useState } from "react"
import UserContext from "../../context/UserContext"
import api from "../../services/api"
import { BallTriangle } from "react-loader-spinner"


export function Studant() {
    const { userData } = useContext(UserContext)
    const [classData, setClassData] = useState()
    const [porcentagem, setPorcentagem] = useState()

    useEffect(() => {
        const data = api.getStudent(userData.token)
        data.then(res => {
            setClassData(res.data),
                setPorcentagem((res.data.classes.length / datas.classes.length) * 100)
        })
    }, [])



    return (
        <>
            {
                classData === undefined ? <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh', // Torna o contêiner verticalmente responsivo
                }}>
                    <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="#004ef5"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                    />
                </div> : <Styled.Main>
                    <Styled.Menu >
                        <Styled.Container>
                            {/* <FaBars style={{ fontSize: "40px" }} /> */}
                            <p>{"SPEED"}</p>
                            <CircularProgressbar
                                value={porcentagem}
                                text={`${porcentagem} %`}
                                styles={{
                                    path: { stroke: "#6abd78" },
                                    trail: { stroke: "#cae6cf" },
                                    text: {
                                        fill: "#000000",
                                        textAnchor: "middle",
                                        alignmentBaseline: "middle",
                                        fontSize: "24px",
                                        fontWeight: "bold"
                                    },
                                    root: { width: "70px" }
                                }} />
                        </Styled.Container>
                    </Styled.Menu >

                    <Styled.User>
                        <h1>{`Bem-vindo(a), ${userData.name}!`}</h1>
                    </Styled.User>

                    {datas.classes.map((item, index) => <Class key={index} className={item} classData={classData} />)}

                    <Styled.Contacts>
                        <Link>
                            <p>{"Próximas Aulas"}</p>
                        </Link>

                        <div> <FaWhatsapp style={{ fontSize: "30px", color: "#25D366 " }} />  <p>{"Fale conosco"}</p></div>
                    </Styled.Contacts>

                </Styled.Main>
            }
        </>
    )
}

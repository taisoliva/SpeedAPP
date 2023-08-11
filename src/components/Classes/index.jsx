import { styled } from "styled-components";
import * as Styled from "../../Pages/StudantPage/styled"
import { Collapse, List, ListItem, ListItemText, Paper } from "@mui/material";
import { IoIosArrowDropdown } from "react-icons/io"
import { useState } from "react";

export default function Class({className}){

    console.log(className)

    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Styled.ItemClass onClick={toggleExpand}>
                <p>{className}</p>
                <Styled.Icone>
                    <IoIosArrowDropdown style={{ fontSize: "30px" }} />
                </Styled.Icone>
            </Styled.ItemClass>

            <StyledContainerData style={{width: '250px'}}>
                <Collapse in={expanded}>
                    <StyledData>
                        <List>
                            <ListItem>
                                <ListItemText primary="Aula concluída em: 12/07/2022" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Professor(a): Taís" />
                            </ListItem>
                        </List>
                    </StyledData>

                </Collapse>
            </StyledContainerData>
        </>
    )
} 

const StyledContainerData = styled(Paper)`

`;

const StyledData = styled.div`
  padding: 10px;
`;
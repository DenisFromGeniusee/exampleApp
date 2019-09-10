import React from 'react'
import ListItemMaterialUI from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function ListItem(props) {
    return (
        <ListItemMaterialUI key={props.indexItem}>
            <ListItemText
                primary={`{${props.item.firstElement}, ${props.item.secondElement}}`}
            >
            </ListItemText>
        </ListItemMaterialUI>
    )
}

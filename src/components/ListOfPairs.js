import React from 'react'
import List from '@material-ui/core/List';
import { isEmpty } from 'lodash';
import ListItem from './ListItem'

export default function ListOfPairs(props) {
    return (
        <div>
            {!isEmpty(props.values.pairsArray) &&
                <React.Fragment>
                    <h2>
                        Total count:{props.values.pairsArray.length}
                    </h2>
                    <List className={props.classes.listofPairs}>
                        {props.values.pairsArray.map((item, index) =>
                            <ListItem
                                key={index}
                                indexItem={index}
                                item={item}
                            />
                        )}
                    </List>
                </React.Fragment>
            }
        </div>
    )
}
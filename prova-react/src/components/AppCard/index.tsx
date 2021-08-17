import React from 'react';
import { AppCardWrapper, ContentWrapper } from './style';

const AppCard: React.FC = (props) =>{

    return(
        <AppCardWrapper>
            {props.children}
        </AppCardWrapper>
    )
};

export const AppContent: React.FC = (props) =>{
    return(
        <ContentWrapper>
            {props.children}
        </ContentWrapper>
    )
}

export default AppCard;
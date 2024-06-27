import {HeaderContainer, AppBar, Toolbar, IconButton, Icon, Title, ImageContainer} from './styledHeader'

interface HeaderProrps{
    title: string
}

export default function Header(props:HeaderProrps) {
    return (
        <HeaderContainer>
       
        <AppBar>
          <Toolbar>
            <IconButton>
              <Icon />
            </IconButton>
            <Title>{props.title}</Title>
          </Toolbar>
        </AppBar>
        <ImageContainer/>
      </HeaderContainer>
    );
}
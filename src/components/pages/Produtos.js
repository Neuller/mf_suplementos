import stylesDefault from '../layout/Default.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';



function Produtos() {
    return (
        <section className={stylesDefault.section}>
            <h1>CATEGORIA DE PRODUTOS</h1>

            <div>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            WHEY
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            A PARTIR DE R$
                        </Typography>
                        <Typography variant="body2">
                            Proteína ideal para quem treina hipertrofia e quer ganhar massa muscular.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">CONFERIR</Button>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            CREATINA
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            A PARTIR DE R$
                        </Typography>
                        <Typography variant="body2">
                            Proteína ideal para quem treina hipertrofia e quer ganhar massa muscular.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">CONFERIR</Button>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            PRÉ TREINO
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            A PARTIR DE R$
                        </Typography>
                        <Typography variant="body2">
                            Proteína ideal para quem treina hipertrofia e quer ganhar massa muscular.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">CONFERIR</Button>
                    </CardActions>
                </Card>
            </div>
        </section>
    )
}

export default Produtos;
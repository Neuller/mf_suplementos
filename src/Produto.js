function Produto(props) {
    return (
        <div className="produto">
            <img src={props.produtos.foto} />
            <p>{props.produtos.nome}</p>
            <p>R$ {props.produtos.preco}</p>
            <p>{props.produtos.descricao}</p>
        </div>
    );
}

export default Produto;
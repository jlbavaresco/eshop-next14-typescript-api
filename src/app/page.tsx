import Produto from "@/bd/entitites/Produto";

async function getData() {
  const res = await fetch(`http://localhost:3000/api/produto`);
  return res.json()
}
export default async function Home() {

  const produtos: Produto[] = await getData();
  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((objeto: Produto) => (
            <tr key={objeto.codigo}>
              <td>{objeto.codigo}</td>
              <td>{objeto.nome}</td>
              <td>{objeto.descricao}</td>
              <td>{objeto.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

/* eslint-disable no-undef */
import React, { Component } from "react";

const estadoInicial = {
    nome: '',
    sku: '',
    descricao:'',
    preco: 0,
    fornecedor:''
}

class CadastroProdutos extends Component {

    state = {
        nome: '',
        sku: '',
        descricao:'',
        preco: 0,
        fornecedor:''

    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo] :valor })
    }

    onSubimit = (event) => {
        console.log(this.state)
    }

    limpaCampo = () => {
        this.setState(estadoInicial)
    }


  render() {
    return (
      <div className="card">
        <div className="card-header">Cadastro de Produtos</div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nome: </label>
                <input type="text" onChange={this.onChange} name="nome" value={this.state.nome} className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>SKU: </label>
                <input type="text" name="sku" onChange={this.onChange} value={this.state.sku} className="form-control" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Descrição: </label>
                <textarea type="text" name="descricao" onChange={this.onChange} value={this.state.descricao} className="form-control" />
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-md-6">
              <div className="form-group">
                <label>Preço: </label>
                <input type="text" name="preco" onChange={this.onChange} value={this.state.preco} className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Fornecedor: </label>
                <input type="text" name="fornecedor" onChange={this.onChange} value={this.state.fornecedor} className="form-control" />
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-md-1">
              <div className="form-group">
               <button onClick={this.onSubimit} className="btn btn-success">Salvar</button>
              </div>
            </div>

            <div className="col-md-1">
              <div className="form-group">
               <button onClick={this.limpaCampo} className="btn btn-primary">Limpar</button>
              </div>
            </div>

           
          </div>


        </div>
      </div>
    );
  }
}

export default CadastroProdutos;

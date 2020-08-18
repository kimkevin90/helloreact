import React, { Component } from 'react'
import Nav from "./components/Nav"
import ReadArticle from "./components/ReadArticle"
import CreateArticle from "./components/CreateArticle"
import Subject from "./components/Subject"
import Control from "./components/Control"
import UpdateArticle from "./components/UpdateArticle"
import './App.css';

class App extends Component {
  //state값 초기화하고 밑에 값들로 적용할려고함; constructor안에 넣을것임.
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HyperText ...' },
        { id: 2, title: 'CSS', desc: 'CSS is HyperText ...' },
        { id: 3, title: 'JavaScript', desc: 'Javascript is HyperText ...' },
      ]
    }
  }
  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;

      }
      i = i + 1;
    }
  }
  getContent() {
    console.log('app random')
    let _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadArticle title={_title} desc={_desc}></ReadArticle>
    } else if (this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadArticle title={_content.title} desc={_content.desc}></ReadArticle>
    } else if (this.state.mode === 'create') {
      _article = <CreateArticle onSubmit={function (_title, _desc) {
        // add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        //this.state.contents.push(
        //  { id: this.max_content_id, title: _title, desc: _desc }
        //);
        //push는 원본 배열 훼손한다.
        //let _contents = this.state.contents.concat(
        //  { id: this.max_content_id, title: _title, desc: _desc }
        //)
        let newContents = Array.from(this.state.contents);
        newContents.push({ id: this.max_content_id, title: _title, desc: _desc });
        this.setState({
          contents: newContents
        });
        console.log(_title, _desc)
      }.bind(this)}></CreateArticle>
    } else if (this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateArticle data={_content} onSubmit={function (_title, _desc) {
        // add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        //this.state.contents.push(
        //  { id: this.max_content_id, title: _title, desc: _desc }
        //);
        //push는 원본 배열 훼손한다.
        //let _contents = this.state.contents.concat(
        //  { id: this.max_content_id, title: _title, desc: _desc }
        //)
        let newContents = Array.from(this.state.contents);
        newContents.push({ id: this.max_content_id, title: _title, desc: _desc });
        this.setState({
          contents: newContents
        });
        console.log(_title, _desc)
      }.bind(this)}></UpdateArticle>
    }
    return _article
  }
  render() {
    return (
      <div className='App'>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        >
        </Subject>
        <Nav
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data={this.state.contents}
        ></Nav>
        <Control onChangeMode={function (_mode) {
          this.setState({
            mode: _mode
          });

        }.bind(this)}></Control>
        {this.getContent()}
      </div >
    )
  }
}

export default App;

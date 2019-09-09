import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadIdeas, addIdea, updateIdea, deleteIdea, changeSortBy } from '../reducers/idea';
import { showNotification } from '../reducers/notification';
import IdeaTile from '../components/IdeaTile';
import IdeaAddForm from '../components/IdeaAddForm'
import './IdeaList.scss';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

class IdeaList extends React.Component {
  static propTypes = {
    fetchIdeas: PropTypes.func.isRequired,
    addIdea: PropTypes.func.isRequired,
    updateIdea: PropTypes.func.isRequired,
    deleteIdea: PropTypes.func.isRequired,
    showNotification: PropTypes.func.isRequired,
    changeSortBy: PropTypes.func.isRequired,
    ideas: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    sortBy: PropTypes.string.isRequired,
  }

  async componentDidMount() {
    const { loadIdeas } = this.props;
    await loadIdeas();
  }

  async onIdeaBlur ({ body, title, id }) {
    const { updateIdea, showNotification } = this.props;
    await updateIdea({ body, title, id });
    showNotification('Changes have been successfully saved.');
  }

  renderSortOptions() {
    const { sortBy, changeSortBy, addIdea, } = this.props;
    return (
      <div className="idea-menu">
        <button className="idea-add" onClick={addIdea} >
          New Idea
        </button>
        <form className="idea-sort" autoComplete="off">
          <FormControl>
            <InputLabel>Sort by</InputLabel>
              <NativeSelect value={sortBy} className="idea-sort__input" onChange={e => changeSortBy(e.target.value)}>
                <option value="createdDate" >Created date</option>
                <option value="title" >Title</option>
              </NativeSelect>
          </FormControl>
        </form>
      </div>
    );
  }

  renderList() {
    const { ideas, deleteIdea } = this.props;
    return (
      <div className="idea-list">
        {ideas.map(idea => (
          <IdeaTile
            key={idea.id}
            idea={idea}
            onBlur={({ body, title }) => this.onIdeaBlur({ id: idea.id, body, title })}
            onDelete={() => deleteIdea(idea.id)}
          />
        ))}
      </div>
    )
  }

  render() {
    const { isLoading } = this.props;
    if (isLoading) return <IdeaAddForm />;
    return (
      <div className="idea-container">
        {this.renderSortOptions()}
        {this.renderList()}
      </div>
    );
  }
}

const actions = {
  loadIdeas,
  addIdea,
  updateIdea,
  deleteIdea,
  showNotification,
  changeSortBy,
};

function mapStateToProps(state) {
  const { data, isLoading, sortBy } = state.ideas;
  return {
    ideas: sortIdeas(data, sortBy),
    isLoading,
    sortBy,
  };
}

function sortIdeas(ideas, sortBy) {
  if (sortBy === 'createdDate') {
    return ideas.sort((a, b) => {
      return new Date(a.createdDate) - new Date(b.createdDate);
    })
  }
  if (sortBy === 'title') {
    return ideas.sort((a, b) => a.title.localeCompare(b.title));
  }
  return ideas;
}

export default connect(mapStateToProps, actions)(IdeaList);
import {Component} from 'react'

import RepoCardItem from '../RepoCardItem'

import './index.css'

class Home extends Component {
  state = {repoList: []}

  componentDidMount() {
    this.getRepoData()
  }

  getRepoData = async () => {
    const myToken = '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'
    const option = {
      headers: {
        Authorization: `Bearer ${myToken}`,
      },
      method: 'GET',
    }
    const url =
      'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc'
    const response = await fetch(url, option)
    const data = await response.json()
    const repoListData = data.items
    const updatedData = repoListData.map(each => {
      const {owner} = each
      return {
        fullName: each.full_name,
        description: each.description,
        stargazersCount: each.stargazers_count,
        openssues: each.open_issues,
        updatedAt: each.updated_at,
        ownerAame: each.name,
        avtarUrl: owner.avatar_url,
        id: each.id,
      }
    })

    if (response.ok === true) {
      this.setState({repoList: updatedData})
    }
  }

  render() {
    const {repoList} = this.state
    console.log(repoList)

    return (
      <div className="home-bg-container">
        <div className="main-heading-container">
          <h1 className="main-heading">Most Starred Repose</h1>
          <div>
            <ul className="unOrder-list-container">
              {repoList.map(each => (
                <RepoCardItem repoItems={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home

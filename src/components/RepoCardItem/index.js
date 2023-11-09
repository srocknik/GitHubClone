import './index.css'

const RepoCardItem = props => {
  const {repoItems} = props

  return (
    <li className="card-container">
      <div className="image-container">
        <img
          className="card-image"
          src={repoItems.avtarUrl}
          alt={repoItems.ownerAame}
        />
      </div>
      <div className="card-heading-desc-conatiner">
        <h1 className="card-heading">{repoItems.fullName}</h1>
        <p className="card-desc">{repoItems.description}</p>
        <div className="card-end-details-container">
          <p className="card-start-count">{repoItems.stargazersCount}</p>
          <p className="card-issue">{repoItems.openssues}</p>
          <p className="card-end-details">
            Last pushed by {repoItems.updatedAt} by {repoItems.ownerAame}
          </p>
        </div>
      </div>
    </li>
  )
}

export default RepoCardItem

import CreateIssue from 'src/components/CreateIssue/CreateIssue'
import IssuesView from 'src/components/Issues/IssuesView'
import SearchBar from 'src/components/SearchBar/SearchBar'

export default function Dashboard() {
  // Close the popup window opened after authenticating through the chrome extension
  // window.opener.postMessage('closePopup', '*')

  // TODO: Somehow find the access token and send it to the extension
  window.opener?.postMessage(document.cookie, '*')

  return (
    <main className="flex flex-grow flex-col gap-4 p-4 pt-0">
      <div className="sticky left-0 top-12 z-10 flex items-center gap-4 bg-background py-4 lg:top-0">
        <SearchBar />

        <CreateIssue />
      </div>

      <IssuesView />
    </main>
  )
}

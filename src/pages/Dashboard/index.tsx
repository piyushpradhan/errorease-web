import CreateIssue from 'src/components/CreateIssue/CreateIssue'
import IssuesView from 'src/components/Issues/IssuesView'
import SearchBar from 'src/components/SearchBar/SearchBar'

export default function Dashboard() {
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

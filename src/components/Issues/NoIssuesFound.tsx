import noDataSvg from '../../assets/icons/no_data.svg'

interface INoIssuesFound {
  title: string
  message: string
}

export default function NoIssuesFound({ title, message }: INoIssuesFound) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 text-center text-muted-foreground">
      <h3 className="text-2xl font-semibold md:text-3xl">{title}</h3>

      <img src={noDataSvg} alt="Empty clipboards" className="w-2/4 md:w-3/6 lg:w-72" />

      <p className="w-10/12 md:w-96">{message}</p>
    </div>
  )
}

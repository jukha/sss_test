type Props = {
  reason?: string;
}

export const Error500Page = ({reason}: Props) => {
  return (
    <div className="p-[20px] flex flex-col gap-[10px]">
      <h3>An error has occurred</h3>
      <p>Please, try again later</p>
      {reason &&<p className="text-[12px] text-gray-500">Reason: {reason}</p>}
    </div>
  )
}

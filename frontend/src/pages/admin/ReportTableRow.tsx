import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteReport } from "../../services/apiQuery";

const ReportTableRow = ({ details }: { details: any }) => {
  console.log(details);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: mutationData } = useMutation({
    mutationFn: () => deleteReport({ id: details._id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["report"] });
    },
  });

  return (
    <tr className='border-b'>
      <th className='text-sm font-medium'>{details.name}</th>
      <th className='text-sm font-medium'>{details.potholeLocation}</th>
      <th className='text-sm font-medium'>{details.nearestLandmark}</th>
      <th className='text-sm font-medium'>
        {details.length}" X {details.breadth}"
      </th>
      <th className='text-sm font-medium flex justify-center items-center gap-3'>
        <button
          className='px-4 py-2 bg-yellow-600 text-white text-sm rounded-md'
          onClick={() =>
            navigate("/admin/report/details", { state: { details: details } })
          }
        >
          View
        </button>
        <button
          onClick={() => mutationData()}
          className='cursor-pointer px-4 py-2 bg-red-600 text-white text-sm rounded-md'
        >
          Delete
        </button>
      </th>
    </tr>
  );
};
export default ReportTableRow;

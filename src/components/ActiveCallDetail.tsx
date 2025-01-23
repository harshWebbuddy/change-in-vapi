import ScaleLoader from "react-spinners/ScaleLoader";
import ButtonVapi from "./ButtonVapi";

const ActiveCallDetail = ({
  assistantIsSpeaking,
  volumeLevel,
  onEndCallClick,
}) => {
  return (
    <div className="flex w-full h-10 gap-6 flex-row justify-between items-center">
      <div className="flex items-center">
        <ScaleLoader color="#ffffff" height={5} width={2.5} loading={true} />
      </div>
      <div className="w-full" style={{ textAlign: "center" }}>
        <ButtonVapi label="End Call" onClick={onEndCallClick} isLoading={""} />
      </div>
    </div>
  );
};

export default ActiveCallDetail;

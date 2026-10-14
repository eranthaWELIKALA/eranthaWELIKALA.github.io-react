import { useNavigate } from "react-router-dom";
import EraOS from "@/components/eraos/EraOS";

const OS = () => {
  const navigate = useNavigate();
  return <EraOS onExit={() => navigate("/")} />;
};

export default OS;

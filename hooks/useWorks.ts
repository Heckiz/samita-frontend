import axios from "axios";
import { useQuery } from "react-query";
import { RootObject } from "../interfaces/works.interface";

const fetchWorks = async () => {
  const { data } = await axios.get<RootObject[]>(
    `http://localhost:1337/designs`
  );
  return data;
};
const fetchWorkId = async (params: string) => {
  const { data } = await axios.get<RootObject>(
    `http://localhost:1337/designs/${params}`
  );
  return data;
};

const useWorks = () => {
  return useQuery<RootObject[], Error>("works", fetchWorks);
};

const useWorkId = (workId: string) => {
  return useQuery<RootObject, Error>(["workId", workId], () =>
    fetchWorkId(workId)
  );
};

export { useWorks, useWorkId, fetchWorks };

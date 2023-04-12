import { AxiosResponse } from "axios";
import { Http } from "../http/http.service";
import { SearchResult } from "./search.model";

export class SearchService {
  static search(
    searchTerm: string
  ): Promise<AxiosResponse<{ data: SearchResult }>> {
    return Http.get("/search", { params: { searchTerm } });
  }
}

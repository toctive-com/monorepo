export interface CrmRepository {
  notify: (message: string) => Promise<void>;
}

export default CrmRepository;

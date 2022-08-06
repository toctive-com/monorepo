export interface CrmRepository {
  notify: (options: { message: string; data?: any }) => Promise<void>;
}

export default CrmRepository;

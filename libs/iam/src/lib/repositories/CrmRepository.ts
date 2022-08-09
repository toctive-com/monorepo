export interface CrmRepository {
  notify: (options: { message: string; data?: any }) => Promise<any>;
}

export default CrmRepository;

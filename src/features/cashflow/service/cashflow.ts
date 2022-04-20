import AuthService from "features/auth/service/auth";
import Client from "infra/client";

class CashflowService {
  private readonly client = Client;
  private readonly authService = new AuthService();

  async getExpenses() {}
}

export default CashflowService;

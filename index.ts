// Interfaces & Abstract

interface PaymentMethod {
  tax: number;
  createPayment(orderId: string): boolean;
  refoundPayment(orderId: string): boolean;
}

abstract class PaymentMethodFactory {
  abstract create(): PaymentMethod;
}

// Concretos

class PaypalMethod implements PaymentMethod {
  tax: number = 0.05;

  createPayment(orderId: string): boolean {
    // do something

    console.log(
      `Cria a ordem de pagamento ${orderId} via Paypal com a taxa ${this.tax}`
    );
    return true;
  }

  refoundPayment(orderId: string): boolean {
    // do something

    console.log(`Reembolsa a ordem de pagamento ${orderId} via Paypal`);
    return true;
  }
}

class PaypalMethodFactory extends PaymentMethodFactory {
  create(): PaymentMethod {
    return new PaypalMethod();
  }
}

class PagseguroMethod implements PaymentMethod {
  tax: number = 0.05;

  createPayment(orderId: string): boolean {
    // do something

    console.log(
      `Cria a ordem de pagamento ${orderId} via Pagseguro com a taxa ${this.tax}`
    );
    return true;
  }

  refoundPayment(orderId: string): boolean {
    // do something

    console.log(`Reembolsa a ordem de pagamento ${orderId} via Pagseguro`);
    return true;
  }
}

class PagseguroMethodFactory extends PaymentMethodFactory {
  create(): PaymentMethod {
    return new PagseguroMethod();
  }
}

// Client Code

function ClientCode() {
  let paymentMethod: PaymentMethod;

  // Entrou um pagamento via paypal

  const paypalMethodFactory = new PaypalMethodFactory();
  paymentMethod = paypalMethodFactory.create();
  paymentMethod.createPayment("Order01");

  // Entrou um pagamento via pagseguro
  const pagseguroMethodFactory = new PagseguroMethodFactory();
  paymentMethod = pagseguroMethodFactory.create();
  paymentMethod.createPayment("Order02");
  paymentMethod.refoundPayment("Order02");
}

ClientCode();

// Factory functions

class DatabaseInstance {}
class EmiteNotaFiscalUseCase {}

class AddNewOrderUseCase {
  constructor(a: DatabaseInstance, b: EmiteNotaFiscalUseCase) {}
}

function makeDatabaseInstance() {
  return new DatabaseInstance();
}

function makeEmiteNotaFiscalUseCase() {
  return new EmiteNotaFiscalUseCase();
}

function makeAddNewOrderUseCase() {
  return new AddNewOrderUseCase(
    makeDatabaseInstance(),
    makeEmiteNotaFiscalUseCase
  );
}

const usecase = makeAddNewOrderUseCase();

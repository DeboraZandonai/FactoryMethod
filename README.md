<h1 align="center">🚀 Factory Method 🚀</h1>

## 💻 Project proposal

Challenge: Implementation of the Design pattern Factory Method.

<h2>
  The problem
</h2>

In a virtual store we have only one payment method, via Paypal. At a certain point, clients began to ask to implement Pagseguro. <br/>
This became a problem as all the payment code is implemented inside the Paypal class.<br/>
Most of your code is nested and adding the new payment method in there would make the code full of conditionals and every time you would implement a new payment type it would make it even more complicated.

<h2>
  The solution
</h2>

The factory method suggests that you replace the creation of the Paypal class with a special Factory function. The result of this creation, we call product.<br/>
For this we use a payment method interface where it will implement exactly the same methods.<br/>
Furthermore, a class is an abstract object creation class so that we can extend and generate concrete classes for each of the payment methods.

## 📝 License

This project is under the **MIT** license. For more information, access the file [LICENSE](https://github.com/DeboraZandonai/FactoryMethod/blob/master/LICENSE).

<h4 align=center>Made with ❤️ by <a href="https://www.linkedin.com/in/debora-zandonai-4ab092195/">Debora Zandonai</a></h4>

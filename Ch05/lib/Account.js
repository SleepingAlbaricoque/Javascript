class Account {
    
    constructor(bank, id, name, balance){ // 생성자에서 멤버 변수 선언 및 초기화 
        this.bank = bank;
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    
    deposit(money){ // function 키워드 생략
        this.balance += money;
    }

    withdraw(money){
        this.balance -= money;
    }

    show(){
        document.write('<p>');
        document.write('은행명: ' + this.bank + '<br/>');
        document.write('계좌번호: ' + this.id + '<br/>');
        document.write('입금주: ' + this.name + '<br/>');
        document.write('현재잔액: ' + this.balance + '<br/>');
        document.write('</p>');
    }

}
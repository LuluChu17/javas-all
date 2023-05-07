// 85
    {
        let num1=-1
        let num2=30 // вывод: при инвертировании логическое выражение ИЛИ, преобразуется в И, и наоборот

        if (!(num1 >= 0 || num2 <= 10)) {
            console.log('+++');
        } else {
            console.log('---');
        }
    }

// 86
    {
        let test=true

        if (test===true) {
            console.log('+++'+' — '+test)
        } else {
            console.log('---')
        }
    }

    {
        let test=false

        if (test===false) {
            console.log('+++'+' — '+test)
        } else {
            console.log('---')
        }
    }

// 87
    {
        // Следующие значения в результате преобразования дают логическое false :
        //  undefined , null , 0 , -0 , NaN , ""
    }

    {
        // Boolean(false);         // false
        // Boolean(undefined);     // false
        // Boolean(null);          // false
        // Boolean('');            // false
        // Boolean(NaN);           // false
        // Boolean(0);             // false
        // Boolean(-0);            // false
        // Boolean(0n);            // false


        // Boolean(true);          // true
        // Boolean('hi');          // true
        // Boolean(1);             // true
        // Boolean([]);            // true
        // Boolean([0]);           // true
        // Boolean([1]);           // true
        // Boolean({});            // true
        // Boolean({ a: 1 });      // true
    }

    {
        let test;
		
        if (test == true) {
            console.log('+++');
        } else {
            console.log('---');
        }

        console.log(test)
    }

    {
        let test = -1;
		
        if (test == true) {
            console.log('+++');
        } else {
            console.log('---');
        }
        console.log(Boolean(test))
    }

// 88
    {
        let test=1
        
        if (test) {
            console.log('+++')
        } else {
            console.log('---')
        }
    }

// 89
    {
        let test = true;

        if (!test) {
            console.log('+++');
        } else {
            console.log('---');
        }    
    }

    {
        let test = true;

        if (test) {
            console.log('+++');
        } else {
            console.log('---');
        }
    }

// 91
    {
        
    }
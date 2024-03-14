Forms in angular ?

What are forms in angular?
Types of forms ?
what is the difference between  types of forms ?
How we can implement ?
whis type is recommended ?


Frontend languages   =====> taking the user input and displaying output i/o
backend languages
db
testing

forms are used to create input fields for user interaction.


There are two types of angular forms

    1. Template driven form
    2. Reactive form


    1. Template Driven Form: In this type most of the code is written in component template.

    2. Reactive Form: Most of the code is written in component class


    Template Driven Forms(TDF)
    ====================================================
        - Easy to use and similar to angular JS forms   
        - Two way data binding with ngModel
        - Bulky HTML and minimal component code
        - Automatically tracks the form and form elements state and validity
        - Unit testing is a challenge
        - Readability decreases with complex forms and validations
        - Suitable for simple scenarios



    Track Control State and Validity
    ==================================================


    State                                                   class If true                       class if false
    ------------------------------------------------------------------------------------------------------------------
    The control has been visited.                           ng-touched                          ng-untouched
    ------------------------------------------------------------------------------------------------------------------
    The Control's value has changed.                        ng-dirty                            ng-pristin
    -----------------------------------------------------------------------------------------------------------------
    The Control's value is valid.                           ng-valid                            ng-invalid
    ------------------------------------------------------------------------------------------------------------------



    ngModel Properties
    =======================================================

        class                      Property                     
    ------------------------------------------------------------------------------------------------------------------
    ng-untouched                    untouched                 
    ------------------------------------------------------------------------------------------------------------------
    ng-touched                     touched                  
    -----------------------------------------------------------------------------------------------------------------
    ng-pristin                      pristin                 
    ------------------------------------------------------------------------------------------------------------------
    ng-dirty                        dirty
    -----------------------------------------------------------------------------------------------------------------
    ng-valid                         valid
    ----------------------------------------------------------------------------------------------------------------
    ng-invalid                        invalid
    --------------------------------------------------------------------------------------------------------------

    
    Reactive Forms
    ===============================================================

        - Code and the logic resides in the component class
        - No two way data binding
        - well suited for complex scenarios
        - Dynamic form fields
        - custom validation
        - Dynamic Validation
        - Unit test

    - How We proceed Reactive form
    =================================
        - Add the form HTML
        - Create the form model
        - Manage the form control values
        - FormBuilder services
        - Validations - Simple, Custom, Cross-field and Dynamic
        - Dynamic form controls
        - Submitting form data.